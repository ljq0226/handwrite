function red() {
    console.log('red')
}
function green() {
    console.log('green')
}

function yellow() {
    console.log('yellow')
}

const task = (timer, light, callback) => {
    setTimeout(() => {
        switch (light) {
            case 'red': red(); break
            case 'green': green(); break
            case 'yellow': yellow(); break
        }
        callback()
    }, timer);
}

const work = () => {
    task(3000, 'red', () => {
        task(1000, 'green', () => {
            task(2000, 'yellow', work)
        })
    })
}

// work()

const promiseLight = (timer, light) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (light) {
                case 'red': red(); break
                case 'green': green(); break
                case 'yellow': yellow(); break
            }
            resolve()
        }, timer);
    })
}
const lightWork = () => {
    promiseLight(3000, 'red')
        .then(() => promiseLight(1000, 'green'))
        .then(() => promiseLight(2000, 'yellow'))
        .then(lightWork)


}

// lightWork()


const asyncTask = async () => {
    await promiseLight(3000, 'red')
    await promiseLight(1000, 'green')
    await promiseLight(2000, 'yellow')
    asyncTask()
}
// asyncTask()


