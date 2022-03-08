import harry from './assets/pics harry potter/pics harry potter/1.png'
import hermione from './assets/pics harry potter/pics harry potter/2.png'
import ron from './assets/pics harry potter/pics harry potter/3.png'


const contacts = [
    {
        id:1,
        name:'Harry Potter',
        imgSrc:`${harry}`,
        phone: '+54 223 542133',
        email: 'Harry@gmail.com',
    },
    {
        id:2,
        name:'Hermione Granger',
        imgSrc:`${hermione}`,
        phone: '+54 223 542132',
        email: 'Hermione@gmail.com',

    },
    {
        id:3,
        name:'Ron Weasley',
        imgSrc:`${ron}`,
        phone: '+54 223 542110',
        email: 'ron@gmail.com',
    }
];
export default contacts;