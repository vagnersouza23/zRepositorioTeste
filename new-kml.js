
let placemarks = document.getElementsByTagName('placemark')
let divKml     = document.querySelector('#kml')
const container = document.createElement('div')

for(let i = 0; i < placemarks.length; i++){

    let elemento = placemarks[i]
    let objectId = elemento.querySelector('SimpleData[name="OBJECTID"]').innerHTML
    let nrZe     = elemento.querySelector('SimpleData[name="NR_ZONA"]').innerHTML
    let coords   = elemento.querySelectorAll('coordinates')
    let coordsTratadas = ''

    for(let i = 0; i < coords.length; i++){
        let coord = coords[i].innerHTML
        coordsTratadas += `<coordinates>${coord}</coordinates>`
    }

    const tagEstilo = elemento.getElementsByTagName('style')[0]
    const placemark = document.createElement('placemark')

    placemark.innerHTML = `
        <name><![CDATA[${nrZe}ª Zona Eleitoral - ${'Buscar nomes das ZEs'}]]></name>
        <description>
            <![CDATA[<table cellpadding="1" cellspacing="1">
                <tr>
                    <td>Informação:</td>
                    <td>01</td>
                </tr>
                <tr>
                    <td>Informação:</td>
                    <td>02</td>
                </tr>
                <tr>
                    <td>Informação:</td>
                    <td>03</td>
                </tr>
                <tr>
                    <td>Informação:</td>
                    <td>04</td>
                </tr>
                <tr>
                    <td>Informação:</td>
                    <td>05</td>
                </tr>
            </table>]]>
        </description>

        <styleUrl>#Style_5</styleUrl>

        <ExtendedData>
            <SchemaData schemaUrl="#ze_2023_12">
                <SimpleData name="OBJECTID">${objectId}</SimpleData>
                <SimpleData name="NR_ZONA">${nrZe}</SimpleData>
            </SchemaData>
        </ExtendedData>

        <MultiGeometry>
            <Polygon>
            <outerBoundaryIs>
                <LinearRing>
                    ${coordsTratadas}
                </LinearRing>
            </outerBoundaryIs>
            </Polygon>
        </MultiGeometry>
  
    
    
    `

    container.appendChild(placemark)

    const style = document.createElement('style')
    style.innerHTML = tagEstilo.innerHTML
    // placemark.appendChild(style)
    placemark.insertBefore(style, placemark.firstChild)




}

divKml.appendChild(container)