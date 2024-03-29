const swapElement = function(aElement, bElement) 
{
    const wrap = aElement.parentNode
    const a = aElement.nextElementSibling
    const b = bElement.nextElementSibling
    
    wrap.insertBefore(bElement,a)
    wrap.insertBefore(aElement,b)
}

const swap = async (arr, i, j) => 
{
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t

    let k = items[i].style.left
    items[i].style.left = items[j].style.left
    items[j].style.left = k

    await sleep(window.fps)
    swapElement(items[i], items[j])
    items = document.querySelectorAll('.content .item')
}

const sleep = (duration) => 
{
    return new Promise((resolve, reject) => 
    {
        for (let i = 0; i < items.length; i++) 
        {
            items[i].style.transition = 'left ' + duration/1000 + 's'
        }
        setTimeout(resolve, duration)
    })
}

const print = () => 
{
    let h = ''
    let l = ''
    for (let i = 0; i < items.length; i++) 
    {
        h += items[i].style.height + '  '
        l += items[i].style.left + '  '
    }
    console.log(h)
    console.log(l)
}

const randomArr = (left, right, length) => 
{
    const arr = []
    for (let i = 0; i < length; i++) 
    {
        const num = parseInt(Math.random()*(right-left) + left)
        arr.push(num)
    }
    return arr
}

const $ = (selector) => 
{
    if (document.querySelectorAll(selector).length > 1) 
    {
        return document.querySelectorAll(selector)
    } 
    else 
    {
        return document.querySelector(selector)
    }
}
