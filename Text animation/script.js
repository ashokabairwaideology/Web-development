const data = {
    title: ' Cod.ewithfun',
    text: ' hello world!',
    url: ' https://www.example.com'
};

if(navigator.canShare && navigator.canShare(data)){
    navigator.share(data);
} else {
    console.log(" not supported!");
}