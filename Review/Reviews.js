$(document).ready(()=>{
    // alert("SHII")
    let length = 0

    $('.left').click(()=>{
        length +=40
        if (length>-80){
            $('.right').attr("disabled", false)
        }
    
        if (length>=80){
            $(".card__stack").css('left',length +'%'  )
            $('.left').attr("disabled", true)
            // length -= 40
            return
        }
        else{
            $(".card__stack").css('left',length +'%'  )
        }

    })
    $('.right').click(()=>{
        if (length<=80){
            $('.left').attr("disabled", false)
        }
        // length -=40
        if (length<=-40){
            length -=40
            $(".card__stack").css('left',  length + "%")
            $('.right').attr("disabled", true)
            // length += 40
            return
        }
        else{
            length -=40
            $(".card__stack").css('left',  length + "%")
        }
    })

    $('.rating__button').click((e)=>{
        e.preventDefault()
        $('.rating__button').removeClass('selected')
        $(e.target).addClass("selected")
        // $(e.target).css("background-color", "var(--primary-color)")
    })
})