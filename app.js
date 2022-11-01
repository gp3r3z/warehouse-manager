console.log("Connected via App")




const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]





function drawPackages(packages) {
    console.log("Drawing package")
    let lineUpElm = document.getElementById('packages')
    // using a template resets the code to nothing when it runs, so it can be built back up
    let template = ''
    packages.forEach(package => {

        template +=
            `
        <div class="col-4 m-2 bg-img p-4">

         <div class="bg-white ">
          <h4 class="label">Priority:${package.priorityLevel}</h4>
          <h4 class="text-black">Fragile:${package.isFragile}</h4>
          <h4 class="text-black">Weight:${package.weight}</h4 >
          <h4 class="text-black">To:${package.to}</h4>
          <h4 class="text-black">TrackingNumber:${package.trackingNumber}</h4>
          </div>
        </div >

            `

    })
    lineUpElm.innerHTML = template

}


function HeavyFilter() {

    let heavyPackage = packages.filter(package => package.weight > 5)
    console.log("Heavy button is triggered", heavyPackage)
    drawPackages(heavyPackage)
}

function PriorityFilter() {
    let priorityPack = packages.filter(package => package.priorityLevel == 'express')
    console.log("Priority button is triggered", priorityPack)
    drawPackages(priorityPack)
}

function FragileFilter() {
    let fragilePack = packages.filter(package => package.isFragile == true)
    console.log("Fragile button is triggered", fragilePack)
    drawPackages(fragilePack)
}



function drawAllPackages() {
    drawPackages(packages)
}