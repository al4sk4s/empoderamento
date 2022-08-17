const isMobile = function(){
    const match = window.matchMedia('(pointer:coarse)');
    return (match && match.matches);
}
console.log(`${isMobile() ? 'Mobile' : 'not mobile'}`);