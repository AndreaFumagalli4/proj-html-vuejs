import { reactive } from 'vue';

export const store = reactive({
    categoryList: [
        {
            image_path: 'home-5-image-box-01.png',
            title: 'Idea Discussion',
            text: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
        },
        {
            image_path: 'home-5-image-box-02.png',
            title: 'Web Development',
            text: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'
        },
        {
            image_path: 'home-5-image-box-03.png',
            title: 'System Administration',
            text: 'Learners are encouraged to study the mechanism and structure of system administration.'
        },
        {
            image_path: 'home-5-image-box-04.png',
            title: 'Graphic Design',
            text: 'Have a passion for graphics and arts? Show your talents with confidance and self-assertiveness.'
        },
    ],
    dataList: [
        {
            number: '1.926',
            text: 'finished sessions'
        },
        {
            number: '3.092+',
            text: 'enrolled learners'
        },
        {
            number: '200',
            text: 'online instruction'
        },
        {
            number: '100%',
            text: 'satisfaction rate'
        }
    ],
    coursesInfoList: [
        {
            title: 'Multiple platforms supported fot teaching & studyng',
            text: 'MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We konw things aren\'t supposed to be devoured in a  short time, you can always access our knowledge base from any device',
            isActive: true,
        },
        {
            title: 'Multiple course participation at the same time',
            text: 'MaxCoach supports the act of teaching and learning on mmultiple platforms like online or offline via material downloads. We konw things aren\'t supposed to be devoured in a  short time, you can always access our knowledge base from any device',
            isActive: false,
        },
        {
            title: 'Track study progress & deliver prompt feedback',
            text: 'MaxCoach supports the act of teaching and learning on mmultiple platforms like online or offline via material downloads. We konw things aren\'t supposed to be devoured in a  short time, you can always access our knowledge base from any device',
            isActive: false,
        },
    ],
    latestCourseInfoList: [
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
        
    ],
    reviewList: [
        {
            image: 'testimonial-avata-02.jpg',
            feedback: 'I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.',
            name: 'Mina Hollace',
            employment: 'Freelancer',
            isView: true
            
        },
        {
            image: 'testimonial-avata-04.jpg',
            feedback: 'MaxCoach is my best choise. Their tutors are smart and professional when deadling with students.',
            name: 'Madley Pondor',
            employment: 'IT Specialist',
            isView: true
            
        },
        {
            image: 'testimonial-avata-01.jpg',
            feedback: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.',
            name: 'Luvic Dubble',
            employment: 'Private Tutor',
            isView: true
        },
        {
            image: 'testimonial-avata-03.jpg',
            feedback: 'I\'m a very strict person so I require everything to be organizedand neat. MaxCoach guys just got me.',
            name: 'Florence Themes',
            employment: 'Multimedia Admin',
            isView: false
        },
    ],
    contactsList: [
        '382 NE 191st # 87394 Miami, FL 33179-3899',
        '+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)',
        'support@maxcoach.com'
    ],
    exploreList: [
        'Start here',
        'blog',
        'About us'
    ],
    infoFooterList: [
        'Success story',
        'Courses',
        'Coutact us'
    ],
    informationsList: [
        'Membership',
        'Purchase guide',
        'Privacy policy',
        'Terms of services'
    ]
})