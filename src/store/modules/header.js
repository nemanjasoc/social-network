const state = {
    dropdowns:[
        { 
            id: 1, 
            smile: true, 
            badge_number: 6, 
            left_title: 'FRIEND REQUESTS', 
            right_title_first: 'Find Friends', 
            right_title_second: 'Settings',
            footer_color: 'dropdown-footer-blue',
            footer_text: 'Check all your events' 
        },
        { 
            id: 2, 
            comments: true, 
            badge_number: 2, 
            left_title: 'CHAT/MESSAGES', 
            right_title_first: 'Settings', 
            right_title_second: 'Mark All As Read',
            footer_color: 'dropdown-footer-purple',
            footer_text: 'View all Messages'   
        },
        { 
            id: 3, 
            thunder: true, 
            badge_number: 8, 
            left_title: 'NOTIFICATIONS', 
            right_title_first: 'Settings', 
            right_title_second: 'Mark All As Read',
            footer_color: 'dropdown-footer-orange',
            footer_text: 'View all Notifications'   
        }
    ],
    dropdownContentSmile:[ 
        { 
            id: 1, 
            img: 'avatar55-sm.jpg',
            name: 'Tamara Romanoff', 
            text: 'Mutual Friend: Sarah Hetfield' 
        },
        { 
            id: 2, 
            img: 'avatar56-sm.jpg',
            name: 'Tony Stevens', 
            text: '4 Friends in Common' 
        },
        { 
            id: 3, 
            img: 'avatar57-sm.jpg',
            dropdown_author_text_wrapper: true,
            ordinary_smile: true
        },
        { 
            id: 4, 
            img: 'avatar58-sm.jpg',
            name: 'Stagg Clothing', 
            text: '9 Friends in Common' 
        }   
    ],
    dropdownContentComments:[ 
        { 
            id: 1, 
            img: 'avatar59-sm.jpg',
            name: 'Diana Jameson', 
            text: 'Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...',                              
            time: '4 hours ago',
            four_img: false 
        },
        { 
            id: 2, 
            img: 'avatar60-sm.jpg',
            name: 'Jake Parker', 
            text: 'Great, I’ll see you tomorrow!',
            time: '4 hours ago',
            four_img: false 
        },
        { 
            id: 3, 
            img: 'avatar61-sm.jpg',
            name: 'Elaine Dreyfuss', 
            text: 'We’ll have to check that at the office and see if the client is on board with...',
            time: 'Yesterday at 9:56pm',
            four_img: false 
        },
        { 
            id: 4, 
            images: [
                { id: 1, user: 'avatar10-sm.jpg' },
                { id: 2, user: 'avatar11-sm.jpg' },
                { id: 3, user: 'avatar12-sm.jpg' },
                { id: 4, user: 'avatar13-sm.jpg' }
            ],
            four_img: true
        }   
    ],
    dropdownThunderComments:[
        {
            id: 1, 
            img: 'avatar62-sm.jpg',
            name: 'Mathilda Brinker', 
            text: 'commented on your new',
            colored_text: 'profile status',                               
            time: '4 hours ago',
            chat_message_icon: true
        },
        {
            id: 2, 
            img: 'avatar63-sm.jpg',
            dropdown_author_text_wrapper: true,
            time: '9 hours ago',
            ordinary_smile: true
        },
        {
            id: 3, 
            img: 'avatar64-sm.jpg',
            name: 'Sarah Hetfield',
            text: 'commented on your',
            colored_text: 'photo',
            time: 'Yesterday at 5:32am',
            chat_message_icon: true,
            comment_photo: true 
        },
        {
            id: 4, 
            img: 'avatar65-sm.jpg',
            name: 'Green Goo Rock',
            text: 'invited you to attend to his event Goo in',
            colored_text: 'Gotham Bar',                               
            time: 'March 5th at 6:43pm',
            ordinary_smile: true
        },
        {
            id: 5, 
            img: 'avatar66-sm.jpg',
            name: 'James Summers',
            text: 'commented on your new',
            colored_text: 'profile status',                               
            time: 'March 2nd at 8:29pm',
            chat_message_heart: true
        }
    ],
    account:[
        { id: 1, icon: 'fas fa-bars', account_text: 'Profile Settings' },
        { id: 2, icon: 'far fa-star', account_text: 'Create Fav Page' },
        { id: 3, icon: 'fas fa-sign-out-alt', account_text: 'Log Out' },
    ],
    status: [
        { id: 1, status_dot: 'green-dot', status_title: 'Online' },
        { id: 2, status_dot: 'yellow-dot', status_title: 'Away' },
        { id: 3, status_dot: 'red-dot', status_title: 'Disconnected' },
        { id: 4, status_dot: 'gray-dot', status_title: 'Invisible' },
    ],
    aboutList: [
        { id: 1, about_list_title: 'Terms & Conditions' },
        { id: 2, about_list_title: 'FAQs' },
        { id: 3, about_list_title: 'Careers' },
        { id: 4, about_list_title: 'Contact' }
    ]
}

export default {
    state
}
