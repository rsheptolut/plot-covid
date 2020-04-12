import { Injectable, Injector } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

const XSSI_PREFIX = /^\)\]\}",?\n/;

/**
 * Allows to nore or less continuously store objects in Local Storage and restore from it
 */
@Injectable()
export class StorageService {
    private router: Router;
    public beforeSave = new Subject<void>();
    public onSave = new Subject<void>();

    constructor(
        private readonly injector: Injector,
    ) {
        window.addEventListener('beforeunload', () => this.save());
    }

    public static getItem(key: string, onlySessionStorage?: boolean): string {
        let result = sessionStorage.getItem(key);
        if (!result && !onlySessionStorage) {
            result = localStorage.getItem(key);
        }
        return result;
    }

    public static setItem(key: string, value: string): void {
        if (value != null) {
            sessionStorage.setItem(key, value);
            localStorage.setItem(key, value);
        } else {
            sessionStorage.removeItem(key);
            localStorage.removeItem(key);
        }
    }

    /**
     * Clears the entire local storage (only keys for this app)
     */
    public clear() {
        this.subscribeToRouterOnce();

        for (const storage of [localStorage, sessionStorage]) {
            for (const item in storage) {
                if (item.startsWith('app_')) {
                    storage.removeItem(item);
                }
            }
        }
    }

    /**
     * Gets an object from local storage by the specified key
     */
    public get(key: string, onlySessionStorage?: boolean): any {
        this.subscribeToRouterOnce();
        const storedString = StorageService.getItem('app_' + key, onlySessionStorage);
        if (storedString) {
            return JSON.parse(storedString);
        } else {
            return null;
        }
    }

    /**
     * Saves an object to local storage using the specified key
     * @param key Object key to store
     * @param value Object value
     * @param changedCallback Function to call if the object had changed since last save
     */
    public set(key: string, value: any) {
        this.subscribeToRouterOnce();
        let currentString = value;
        if (value != null) {
            currentString = JSON.stringify(value);
        }

        StorageService.setItem('app_' + key, currentString);
    }

    /**
     * Saves all watched objects to local storage
     */
    public save() {
        this.beforeSave.next();
        this.onSave.next();
        this.subscribeToRouterOnce();
    }

    /**
     * Subscribes itself to router events (NavigationStart) to save all changes to local storage on each such event.
     */
    private subscribeToRouterOnce() {
        if (!this.router) {
            this.router = this.injector.get<Router>(Router, {} as any as Router);
            if (this.router) {
                this.router.events
                    .pipe(filter(e => e instanceof NavigationStart))
                    .subscribe(() => this.save());
            }
        }
    }
}
