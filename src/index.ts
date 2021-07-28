/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />


console.log('Script started successfully');

let currentZone: string;
let cPopup: any;

const config = [
    {
        zone: 'needHelp',
        message: 'Do you need some guidance? We are happy to help you out.',
        cta: [
            {
                label: 'How to Post in Community Board Booth?',
                className: 'primary',
                callback: () => WA.openTab('https://www.canva.com/design/DAEley9knFk/view?embed'),
            }
        ]
    },
    {
        zone: 'followUs',
        message: 'Hey! Have you already started following us?',
        cta: [
            {
                label: 'Facebook',
                className: 'primary',
                callback: () => WA.openTab('https://web.facebook.com/DPSM.CAS.UPM'),
            },
            {
                label: 'Web Page',
                className: 'primary',
                callback: () => WA.openTab('https://dpsm.cas.upm.edu.ph/dpsmweek2021/index.html'),
            }
        ]
    },
]


WA.room.onEnterZone('needHelp', () => {
    currentZone = 'needHelp'
    openPopup(currentZone, currentZone + 'Popup')
});
WA.room.onLeaveZone('needHelp', closePopup)


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
function closePopup(){
    if (typeof currentPopup !== undefined) {
        cPopup.close();
        cPopup = undefined;
    }
}