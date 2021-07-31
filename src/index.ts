/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />


console.log('Script started successfully');

let currentZone: string;
let cPopup: any;

const config = [
    {
        zone: 'Information',
        message: 'Do you need some guidance? We are happy to help you out.',
        cta: [
            {
                label: 'Announcements',
                className: 'primary',
                callback: () => WA.nav.openTab('https://www.canva.com/design/DAElrOJEBho/OBzTVmZnXdG8hRMTGG_oFA/view?utm_content=DAElrOJEBho&utm_campaign=designshare&utm_medium=link&utm_source=viewer'),
            },
            {
                label: 'Map',
                className: 'primary',
                callback: () => WA.nav.openTab('https://www.canva.com/design/DAElznOavUM/eYHdEWD-UkUfNTWeJUlWsg/watch?utm_content=DAElznOavUM&utm_campaign=designshare&utm_medium=link&utm_source=viewer'),
            }
        ]
    },
    {
        zone: 'needHelp',
        message: 'Do you need some guidance? We are happy to help you out.',
        cta: [
            {
                label: 'How to Post in Community Board Booth?',
                className: 'primary',
                callback: () => WA.nav.openTab('https://www.canva.com/design/DAEley9knFk/view?embed'),
            },
            {
                label: 'How to use Q&A Boards?',
                className: 'primary',
                callback: () => WA.nav.openTab('https://www.canva.com/design/DAElsaImtjE/watch?embed'),
            }
        ]
    },
    {
        zone: 'followUs',
        message: 'Love what you are seeing?',
        cta: [
            {
                label: 'Like our Facebook Page‎',
                className: 'primary',
                callback: () => WA.nav.openTab('https://web.facebook.com/DPSM.CAS.UPM'),
            },
            {
                label: 'See our DPSM Week Website',
                className: 'primary',
                callback: () => WA.nav.openTab('https://dpsm.cas.upm.edu.ph/dpsmweek2021/index.html'),
            }, 
            {
                label: 'Thanks to our Sponsors!',
                className: 'primary',
                callback: () => WA.nav.openTab('https://www.canva.com/design/DAElxLEl5Ik/watch?embed')
            },
            {
                label: 'Vote for Crowd Favorite (Student Cluster)',
                className: 'primary',
                callback: () => WA.nav.openTab('https://pollunit.com/polls/tqikaonp7phmh8hn30edsw')
            }
        ]
    },
]


WA.room.onEnterZone('needHelp', () => {
    currentZone = 'needHelp'
    openPopup(currentZone, currentZone + 'Popup')
});
WA.room.onLeaveZone('needHelp', closePopup)

WA.room.onEnterZone('Information', () => {
    currentZone = 'Information'
    openPopup(currentZone, currentZone + 'Popup')
})
WA.room.onLeaveZone('Information', closePopup)

WA.room.onEnterZone('followUs', () => {
    currentZone = 'followUs'
    openPopup(currentZone, currentZone + 'Popup')
});
WA.room.onLeaveZone('followUs', closePopup)


function openPopup(zoneName: string, popupName: string) {
    const zone = config.find((item) => {
        return item.zone == zoneName
    });
    if (typeof zone !== 'undefined') {
        // @ts-ignore otherwise we can't use zone.cta object
        cPopup = WA.ui.openPopup(popupName, zone.message, zone.cta)
    }
}

WA.ui.registerMenuCommand("Vote", () => {
    WA.nav.openTab('https://pollunit.com/polls/tqikaonp7phmh8hn30edsw')
})

WA.ui.registerMenuCommand("Raffle", () => {
    WA.nav.openTab('https://padlet.com/cylim1/GameRaffle')
})

function closePopup(){
    if (typeof currentPopup !== undefined) {
        cPopup.close();
        cPopup = undefined;
    }
}