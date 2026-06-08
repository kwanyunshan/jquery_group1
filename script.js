$(document).ready(function(){
    $(".kira").click(function(){
        var harga=$(".harga").val();
        var berat=$(".berat").val();
        var jumlah=harga*berat;
        $(".hasil").text("Jumlah Bayaran: RM"+jumlah.toFixed(2));
    })
})