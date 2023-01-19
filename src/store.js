import { reactive } from 'vue';

export const store = reactive({
    courseInfoList: [
        {
            image: 'course-02-480x298.jpg',
            teacherProfileImage: '73ee246daf47502812ccefc84bf02898 (1).jpeg',
            teacher: 'Blanche Fields',
            title: 'Learning to write as a professional author',
            lessonsNumber: '20',
            studentsNumber: '50',
            price: '$40.00'
        },
        {
            image: 'stock-full-hd-03-480x298.jpg',
            teacherProfileImage: 'd0d504142acfde820eef2f11feea6253 (1).jpeg',
            teacher: 'Maggie Strickland',
            title: 'Customer-centric Info-Tech strategies',
            lessonsNumber: '24',
            studentsNumber: '769',
            price: 'Free'
        },
        {
            image: 'stock-full-hd-04-480x298.jpg',
            teacherProfileImage: 'd0d504142acfde820eef2f11feea6253 (1).jpeg',
            teacher: 'Maggie Strickland',
            title: 'Open programming courses for everyone: python',
            lessonsNumber: '17',
            studentsNumber: '62',
            price: '$19.00'
        },
        {
            image: 'stock-full-hd-06-480x298.jpg',
            teacherProfileImage: '73ee246daf47502812ccefc84bf02898 (1).jpeg',
            teacher: 'Blanche Fields',
            title: 'Academic listenind and Note-taking',
            lessonsNumber: '14',
            studentsNumber: '67',
            price: '$26.00'
        },
        {
            image: 'course-featured-image-01-480x298.jpg',
            teacherProfileImage: '73ee246daf47502812ccefc84bf02898 (1).jpeg',
            teacher: 'Blanche Fields',
            title: 'Master jQuery in a Short Period of Time',
            lessonsNumber: '6',
            studentsNumber: '51',
            price: '$39.00'
        },
        {
            image: 'stock-full-hd-05-480x298.jpg',
            teacherProfileImage: '73ee246daf47502812ccefc84bf02898 (1).jpeg',
            teacher: 'Blanche Fields',
            title: 'Introduction to Javascript for Beginners',
            lessonsNumber: '14',
            studentsNumber: '76',
            price: '$59.00'
        },
    ],
    eventsList: [
        {
            place: 'Texas',
            nation: 'US',
            typeOfEvent: 'Storytelling Workshop',
            dayNumber: '22',
            month: 'nov'
        },
        {
            place: 'New York',
            nation: 'US',
            typeOfEvent: 'Painting Art Contest 2020',
            dayNumber: '10',
            month: 'oct'
        },
        {
            place: 'Hamburg',
            nation: 'Germany',
            typeOfEvent: 'International Art Fair 2020',
            dayNumber: '23',
            month: 'nov'
        },
        {
            place: 'Illinois',
            nation: 'US',
            typeOfEvent: 'Street Performance: Call for Artist',
            dayNumber: '15',
            month: 'dec'
        },
        {
            place: 'Illinois',
            nation: 'US',
            typeOfEvent: 'Consumer Food Safety Education Conference',
            dayNumber: '22',
            month: 'jul'
        },
        {
            place: 'Dubai',
            nation: 'AER',
            typeOfEvent: 'How meditation improve your mental health?',
            dayNumber: '12',
            month: 'aug'
        },
        
    ]
    
})