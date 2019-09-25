const state = {
    usersSidebar:[
        { id: 1, img: 'avatar67-sm.jpg', status: 'user-status-online' },
        { id: 2, img: 'avatar62-sm.jpg', status: 'user-status-online' },
        { id: 3, img: 'avatar68-sm.jpg', status: 'user-status-online' },
        { id: 4, img: 'avatar69-sm.jpg', status: 'user-status-away' },
        { id: 5, img: 'avatar70-sm.jpg', status: 'user-status-disconected' },
        { id: 6, img: 'avatar64-sm.jpg', status: 'user-status-online' },
        { id: 7, img: 'avatar71-sm.jpg', status: 'user-status-online' },
        { id: 8, img: 'avatar72-sm.jpg', status: 'user-status-away' },
        { id: 9, img: 'avatar63-sm.jpg', status: 'user-status-invisible' },
        { id: 10, img: 'avatar72-sm.jpg', status: 'user-status-away' },
        { id: 11, img: 'avatar71-sm.jpg', status: 'user-status-online' }
    ],
    usersWiderSidebarCloseFriends:[
        { 
            id: 1, 
            img: 'avatar67-sm.jpg', 
            status: 'user-status-online-wider', 
            user_name: 'Carol Summers', 
            title_status: 'ONLINE' 
        },
        { 
            id: 2, 
            img: 'avatar62-sm.jpg', 
            status: 'user-status-online-wider', 
            user_name: 'Mathilda Brinker', 
            title_status: 'AT WORK!' 
        },
        { 
            id: 3, 
            img: 'avatar68-sm.jpg', 
            status: 'user-status-online-wider', 
            user_name: 'Carol Summers', 
            title_status: 'ONLINE' 
        },
        { 
            id: 4, 
            img: 'avatar69-sm.jpg', 
            status: 'user-status-away-wider', 
            user_name: 'Michael Maximoff', 
            title_status: 'AWAY' 
        },
        { 
            id: 5, 
            img: 'avatar70-sm.jpg', 
            status: 'user-status-disconected-wider', 
            user_name: 'Rachel Howlett', 
            title_status: 'OFFLINE' 
        }
    ],
    usersWiderSidebarFamily:[
        { 
            id: 1, 
            img: 'avatar64-sm.jpg', 
            status: 'user-status-online-wider', 
            user_name: 'Sarah Hetfield', 
            title_status: 'ONLINE' 
        }
    ],
    usersWiderSidebarUncategorized:[
        { 
            id: 1, 
            img: 'avatar71-sm.jpg', 
            status: 'user-status-online-wider', 
            user_name: 'Bruce Peterson', 
            title_status: 'ONLINE' 
        },
        {
             id: 2, 
             img: 'avatar72-sm.jpg', 
             status: 'user-status-away-wider', 
             user_name: 'Chris Greyson', 
             title_status: 'AWAY' 
        },
        { 
            id: 3, 
            img: 'avatar63-sm.jpg', 
            status: 'user-status-invisible-wider', 
            user_name: 'Nicholas Grisom', 
            title_status: 'INVISIBLE' 
        },
        { 
            id: 4, 
            img: 'avatar72-sm.jpg', 
            status: 'user-status-away-wider', 
            user_name: 'Chris Greyson', 
            title_status: 'AWAY' 
        },
        { 
            id: 5, 
            img: 'avatar71-sm.jpg', 
            status: 'user-status-online-wider', 
            user_name: 'Bruce Peterson', 
            title_status: 'ONLINE' 
        }
    ],
    tooltips:[
        { id: 1, icon: 'fas fa-comment-dots', text: 'START CONVERSATION' },
        { id: 2, icon: 'fas fa-comment-medical', text: 'AD TO CONVERSATION' },
        { id: 3, icon: 'fas fa-comment', text: 'BLOCK FROM CHAT' }
    ],
    smileIcons:[
        { id: 1, img: 'icon-chat1.png' },
        { id: 2, img: 'icon-chat9.png' },
        { id: 3, img: 'icon-chat6.png' },
        { id: 4, img: 'icon-chat21.png' },
        { id: 5, img: 'icon-chat15.png' },
        { id: 6, img: 'icon-chat24.png' },
        { id: 7, img: 'icon-chat11.png' },
        { id: 8, img: 'icon-chat4.png' },
        { id: 9, img: 'icon-chat20.png' },
        { id: 10, img: 'icon-chat8.png' },
        { id: 11, img: 'icon-chat26.png' },
        { id: 12, img: 'icon-chat27.png' }
    ]
}

export default {
    state
}