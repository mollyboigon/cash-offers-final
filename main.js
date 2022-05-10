const dots = document.querySelectorAll(".dot");
dots.forEach(function(dot) {
    dot.addEventListener("click", function (e) {
        const clicked_dot = e.target;
        clicked_dot.classList.toggle("active");
    });
});

const close_buttons = document.querySelectorAll(".close");

close_buttons.forEach(function(close_button){
    close_button.addEventListener("click", function (e) {
    e.preventDefault();
        
    const clicked_close_button = e.target;
    const clicked_dot = clicked_close_button.closest(".dot");

    clicked_dot.classList.remove("active");
    })

})

function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toLocaleString();

    return num;
}
//get all the calculator inputs
const inputs = document.querySelectorAll("[name='qty']"); /*attribute and value*/
//evaluate all the inputs
inputs.forEach(function (input) { /* input is gonna be the fruit*/
//for each individual input, listen for change
    input.addEventListener("change", function(e) {
//we need to know which fruit or piece of fruit had its value change we need event to tell us where we are
        const this_input = e.target;
        const qty = parseFloat(e.target.value);
        const this_row = this_input.closest(".calculator") //closest looks at element first then element's parent if it doesn't match the selector, then grandparent, so forth, till it gets a match
        //will keep working up until it finds div class row
        
        const nc = this_row.querySelector(".nc"); //will find all descendants of this row with the class amazon on them;
            const nc_span = nc.querySelector("span"); // amazon span = go inside of it and find that span that's inside of it
            const nc_rate = parseFloat(nc.dataset.rate);  //amazon.dataset.price captures dataset as a string, parselfoat turns it into float 
                const nc_price = (qty * nc_rate) + qty;
                nc_span.innerHTML = round_number(nc_price); 
                nc.classList.add("active");//telling javascript to update node so that content is whatever you put on the other side of the equals sign
        
        const sc = this_row.querySelector(".sc"); //will find all descendants of this row with the class amazon on them;
                    const sc_span = sc.querySelector("span"); // amazon span = go inside of it and find that span that's inside of it
                    const sc_rate = parseFloat(sc.dataset.rate);  //amazon.dataset.price captures dataset as a string, parselfoat turns it into float 
                        const sc_price = (qty * sc_rate) + qty;
                        sc_span.innerHTML = round_number(sc_price); 
                        sc.classList.add("active");//telling javascript to update node so that content is whatever you put on the other side of the equals sign
     
        const tenn = this_row.querySelector(".tenn"); //will find all descendants of this row with the class amazon on them;
                        const tenn_span = tenn.querySelector("span"); // amazon span = go inside of it and find that span that's inside of it
                        const tenn_rate = parseFloat(tenn.dataset.rate);  //amazon.dataset.price captures dataset as a string, parselfoat turns it into float 
                            const tenn_price = (qty * tenn_rate) + qty;
                            tenn_span.innerHTML = round_number(tenn_price); 
                            tenn.classList.add("active");

        const ga = this_row.querySelector(".ga");
            const ga_span = ga.querySelector("span");
            const ga_rate = parseFloat(ga.dataset.rate);
            const ga_years = (qty * ga_rate) + qty;
                ga_span.innerHTML = round_number(ga_years);
                ga.classList.add("active");

        const tx = this_row.querySelector(".tx");
                const tx_span = tx.querySelector("span");
                const tx_rate = parseFloat(tx.dataset.rate);
                const tx_years = (qty * tx_rate) + qty;
                    tx_span.innerHTML = round_number(tx_years);
                    tx.classList.add("active");
        
        const fl = this_row.querySelector(".fl");
                const fl_span = fl.querySelector("span");
                const fl_rate = parseFloat(fl.dataset.rate);
                const fl_years = (qty * fl_rate) + qty;
                    fl_span.innerHTML = round_number(fl_years);
                    fl.classList.add("active");

        const al = this_row.querySelector(".al");
                    const al_span = al.querySelector("span");
                    const al_rate = parseFloat(al.dataset.rate);
                    const al_years = (qty * al_rate) + qty;
                        al_span.innerHTML = round_number(al_years);
                        al.classList.add("active");

        const ind = this_row.querySelector(".ind");
                        const ind_span = ind.querySelector("span");
                        const ind_rate = parseFloat(ind.dataset.rate);
                        const ind_years = (qty * ind_rate) + qty;
                            ind_span.innerHTML = round_number(ind_years);
                            ind.classList.add("active");

        const mi = this_row.querySelector(".mi");
                            const mi_span = mi.querySelector("span");
                            const mi_rate = parseFloat(mi.dataset.rate);
                            const mi_years = (qty * mi_rate) + qty;
                                mi_span.innerHTML = round_number(mi_years);
                                mi.classList.add("active");

        const va = this_row.querySelector(".va");
                                const va_span = va.querySelector("span");
                                const va_rate = parseFloat(va.dataset.rate);
                                const va_years = (qty * va_rate) + qty;
                                    va_span.innerHTML = round_number(va_years);
                                    va.classList.add("active");
        const ok = this_row.querySelector(".ok");
                                    const ok_span = ok.querySelector("span");
                                    const ok_rate = parseFloat(ok.dataset.rate);
                                    const ok_years = (qty * ok_rate) + qty;
                                        ok_span.innerHTML = round_number(ok_years);
                                        ok.classList.add("active");
        });
    });