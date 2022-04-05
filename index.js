$(function(){
    $('.calc-btn').on('click',function(){
        $('.result').val($('.result').val()+$(this).html());
    })
    $('.equal').on('click',function(){
        exp=$('.result').val();
        if(exp.includes('x')){
            exp=exp.replace('x','*');
        }
        $('.result').val(eval(exp));
    })
   $('.clear').on('click',function(){
       $('.result').val('');
   }) 
    
});
 