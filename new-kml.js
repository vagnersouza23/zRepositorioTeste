
let placemarks = document.getElementsByTagName('placemark')
let divKml     = document.querySelector('#kml')
const container = document.createElement('div')

for(let i = 0; i < placemarks.length; i++){

    let elemento = placemarks[i]
    let objectId = elemento.querySelector('SimpleData[name="OBJECTID"]').innerHTML
    let nrZe     = elemento.querySelector('SimpleData[name="NR_ZONA"]').innerHTML

    let tagEstilo = elemento.getElementsByTagName('style')[0]

    const placemark = document.createElement('placemark')
    placemark.innerHTML = `<name><![CDATA[${nrZe}ª Zona Eleitoral - ${'Buscar nomes das ZEs'}]]></name>`
    container.appendChild(placemark)

    const style = document.createElement('style')
    style.innerHTML = tagEstilo.innerHTML
    placemark.appendChild(style)


    // console.log(i)


}

divKml.appendChild(container)