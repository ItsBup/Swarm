console.log('hello there! ~Obi-Wan Kenobi')

const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const victims = [{
        name: 'Jimbo',
        picture: '🤵',
        location: '🏤'
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        location: '🏤'
    },
    {
        name: 'Michael',
        picture: '👷',
        location: '🏤'
    },
    {
        name: 'Robert',
        picture: '👷',
        location: '🏥'
    },
    {
        name: 'Terry',
        picture: '🤴',
        location: '🏥',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        location: '🏥',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        location: '🏭',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        location: '🏭',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        location: '🏭',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        location: '🏢',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        location: '🏢',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        location: '🏢',
    }
]

// functions needed:
// draw victims at locations --DONE
// attack victims to turn them into bats --DONE
// move victims randomly between locations after attacks --DONE
// are you winning son?are you losing son?
function drawVictims(){
    locations.forEach(currentLocation => {
        let filteredVictims = victims.filter(victim => victim.location == currentLocation)
        const currentLocationElm = document.getElementById(currentLocation)
        let victimPicture = filteredVictims.map(victim => victim.picture)
        currentLocationElm.innerText = victimPicture.join('')
    }); 
}

function attackLocation(DangerZone){
    console.log(DangerZone)
    let victimThreatened = victims.filter(victim => victim.location == DangerZone)
    let thralls = victimThreatened.filter(victim => victim.picture != '🦇')
    thralls.forEach(victim => {
        victim.picture = '🦇'
    });
    moveItmoveIt()
    drawVictims()
    checkDAWN()
}

function moveItmoveIt() {
    victims.forEach(victim => {
        let newLocation=locations[Math.floor(Math.random()*locations.length)]
        victim.location=newLocation
    });
}

function checkDAWN() {
    let faithful=victims.filter(victim => victim.picture = '🦇')
    if(victims.length = faithful.length){
        window.alert('Congrats! You are a monster.')
    }
    Dawn=Dawn-1
    if(Dawn < 0){
        window.alert('LOOSER. The sun burns. Bad.')
    }
}

let Dawn=6

drawVictims()

