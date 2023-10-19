/// <reference types="vite/client" />
declare module '*.vue' 
{
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module '../../api/user' {  
    export function userLogin(data): any;
    export function getUserInfo(username: string): any; 
    export function updatePassword(data: string): any;
}
