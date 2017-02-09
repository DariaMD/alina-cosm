// Register
regitration();
function regitration(){
    
   $('.log').on('click',function(e){
       e.preventDefault();
         showPreloader();
       
       setTimeout(1000)
        
//         $.ajax({
//            type: 's',
//            url: '',
//            data: '',
//            beforeSend: function(){
//                showPreloader();
//            },
//            success: function(){
//                hidePreloader();
//            },
//            error: function(){
//               errorText(); 
//            }
//        })
         
         
    })
    
   
}
// Show message: Добавлен в корзину
$('.add-cart').on('click', function() {
    showProductMessage(this);
});
