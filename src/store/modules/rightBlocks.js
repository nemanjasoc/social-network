const state = {
    photos:[
        { id: 1, img: 'last-photo10-large.jpg' },
        { id: 2, img: 'last-photo11-large.jpg' },
        { id: 3, img: 'last-photo12-large.jpg' },
        { id: 4, img: 'last-photo13-large.jpg' },
        { id: 5, img: 'last-photo14-large.jpg' },              
        { id: 6, img: 'last-photo15-large.jpg' },
        { id: 7, img: 'last-photo16-large.jpg' },
        { id: 8, img: 'last-photo17-large.jpg' }, 
        { id: 9, img: 'last-photo18-large.jpg' } 
    ],       
    votes:[
        {
            title: 'Thomas Bale',
            percent: '62%',
            filled: 'filled-first',
            number: '12 friends voted for this',
            images: [
                { id: 1, user: 'friend-harmonic1.jpg' },
                { id: 2, user: 'friend-harmonic2.jpg' },   
                { id: 3, user: 'friend-harmonic3.jpg' },
                { id: 4, user: 'friend-harmonic4.jpg' }, 
                { id: 5, user: 'friend-harmonic5.jpg' }, 
                { id: 6, user: 'friend-harmonic6.jpg' },
                { id: 7, user: 'friend-harmonic7.jpg' },
                { id: 8, user: 'friend-harmonic8.jpg' },
                { id: 9, user: 'friend-harmonic9.jpg' }
            ],
            other_users_color: 'other-users',
            other_users_number: '+3'
        },   
        {
            title: 'Ben Robertson',
            percent: '27%',
            filled: 'filled-second',
            number: '7 friends voted for this',
            images: [
                { id: 7, user: 'friend-harmonic7.jpg' },
                { id: 8, user: 'friend-harmonic8.jpg' },
                { id: 9, user: 'friend-harmonic9.jpg' },
                { id: 10, user: 'friend-harmonic10.jpg' },
                { id: 11, user: 'friend-harmonic11.jpg' },
                { id: 12, user: 'friend-harmonic12.jpg' },
                { id: 13, user: 'friend-harmonic13.jpg' }  
            ]
        },            {
            title: 'Michael Streiton',
            percent: '11%',
            filled: 'filled-third',
            number: '2 friends voted for this',
            images: [
                { id: 14, user: 'friend-harmonic14.jpg' },
                { id: 15, user: 'friend-harmonic15.jpg' } 
            ]
        }
    ]                          
}

export default {
    state
}
