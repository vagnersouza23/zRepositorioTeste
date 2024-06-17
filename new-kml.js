
let placemarks = document.getElementsByTagName('placemark')
let divKml     = document.querySelector('#kml')
let container = ''

for(let i = 0; i < placemarks.length; i++){

    let elemento = placemarks[i]
    let objectId = elemento.querySelector('SimpleData[name="OBJECTID"]').innerHTML
    let nrZe     = elemento.querySelector('SimpleData[name="NR_ZONA"]').innerHTML
    let coords   = elemento.querySelectorAll('coordinates')
    let coordsTratadas = ''
    let placemarkTratado = ''

    for(let i = 0; i < coords.length; i++){
        let coord = coords[i].innerHTML
        coordsTratadas += `<coordinates>${coord}</coordinates>`
    }

    const tagEstilo = elemento.getElementsByTagName('style')[0]
    let placemark = ''
    const tagName = `<name><![CDATA[${nrZe}ª Zona Eleitoral - ${'Buscar nomes das ZEs'}]]></name>`
    const tagTable = `Arrumar tabela`
    const tagDesc = `
        <description>
            <![CDATA[<table cellpadding="1" cellspacing="1">
                ${tagTable}
            </table>]]>
        </description>`

    const tagStyleUrl = `<styleUrl>#Style_5</styleUrl>`
    const tagExtend = `
    <ExtendedData>
        <SchemaData schemaUrl="#ze_2023_12">
            <SimpleData name="OBJECTID">${objectId}</SimpleData>
            <SimpleData name="NR_ZONA">${nrZe}</SimpleData>
        </SchemaData>
    </ExtendedData>`

    const tagMultiGeo = `<MultiGeometry>
        <Polygon>
        <outerBoundaryIs>
            <LinearRing>
                ${coordsTratadas}
            </LinearRing>
        </outerBoundaryIs>
        </Polygon>
    </MultiGeometry>`


    placemark = `<style>${tagEstilo.innerHTML}</style>` + tagName + tagDesc + tagStyleUrl + tagExtend + tagMultiGeo



    container += `<placemark>${placemark}</placemark>`




}

divKml.innerHTML = `<pre>${container}</pre>`