const semey = document.getElementById('Semey')
const astana = document.getElementById('Astana')
const petropavl = document.getElementById('Petropavl')
const anadyr = document.getElementById('Anadyr')
const bangui = document.getElementById('Bangui')

async function Api() {
    const respons_semey = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.4267&longitude=80.2667&current=temperature_2m')
    const respons_astana = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.1801&longitude=71.446&current=temperature_2m')
    const respons_petropavl = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m')
    const respons_anadyr = await fetch('https://api.open-meteo.com/v1/forecast?latitude=64.7342&longitude=177.5103&current=temperature_2m')
    const respons_bangui = await fetch('https://api.open-meteo.com/v1/forecast?latitude=4.3612&longitude=18.555&current=temperature_2m')
    const data_semey = await respons_semey.json()
    const data_astana = await respons_astana.json()
    const data_petropavl = await respons_petropavl.json()
    const data_anadyr = await respons_anadyr.json()
    const data_bangui = await respons_bangui.json()
    return [data_semey, data_astana, data_petropavl, data_anadyr, data_bangui]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        semey.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0c`
        astana.textContent = `Air temperature: ${out[1].current.temperature_2m}\u00B0c`
        petropavl.textContent = `Air temperature: ${out[2].current.temperature_2m}\u00B0c`
        anadyr.textContent = `Air temperature: ${out[3].current.temperature_2m}\u00B0c`
        bangui.textContent = `Air temperature: ${out[4].current.temperature_2m}\u00B0c`
    } catch (error) {
        console.log(error)
    } finally {
        setTimeout(output, 10000)
    }
}

output()