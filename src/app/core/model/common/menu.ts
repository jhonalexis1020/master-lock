export class Menu {
    title: string;
    url: string;
    icon: string;
}

export const MENU: Menu[] = [
    { title: 'Inbox', url: '/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/Archived', icon: 'archive' },
    { title: 'Trash', url: '/Trash', icon: 'trash' },
    { title: 'Spam', url: '/Spam', icon: 'warning' },
];