Vue.component("app-grid", {
    template: '<table class="table">\n    <thead>\n        <tr class="is-primary">\n            <th v-for="(key, index) in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">\n                <span>{{labels[index]}}</span>\n                <span class="arrow" :class="sortOrders[key] > 0 ? \'asc\' : \'dsc\'">\n          </span>\n            </th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr v-for="entry in filteredData">\n            <td v-for="key in columns">\n                {{ formatValue(entry[key], key) }}\n            </td>\n        </tr>\n    </tbody>\n</table>',
    props: {
        data: Array,
        columns: Array,
        labels: Array,
        filterKey: String
    },
    data: function() {
        var t = {};
        return this.columns.forEach((function(n) {
            t[n] = 1
        })), {
            sortKey: "",
            sortOrders: t
        }
    },
    computed: {
        filteredData: function() {
            var t = this.sortKey,
                n = this.filterKey && this.filterKey.toLowerCase(),
                e = this.sortOrders[t] || 1,
                r = this.data;
            return n && (r = r.filter((function(t) {
                return Object.keys(t).some((function(e) {
                    return String(t[e]).toLowerCase().indexOf(n) > -1
                }))
            }))), t && (r = r.slice().sort((function(n, r) {
                return ((n = n[t]) === (r = r[t]) ? 0 : n > r ? 1 : -1) * e
            }))), r
        }
    },
    methods: {
        sortBy: function(t) {
            this.sortKey = t, this.sortOrders[t] = -1 * this.sortOrders[t]
        },
        formatValue: (t, n) => "" != n && "" != n ? t : (console.log(n), null != t ? "$" + t.toLocaleString("en-US", {
            style: "decimal"
        }) : void 0)
        

        }
    }
);
var app = new Vue({
    el: "#app",
    data: {
        searchQuery: "",
        gridColumns: ["NAME", "PRIMARY", "SECONDARY", "PAGER", "FAX", "TUBE"],
        gridLabels: ["NAME", "PRIMARY", "SECONDARY", "PAGER", "FAX", "TUBE"],
        gridData: [],
        options: []
    },
    methods: {
        fetchNumData: function() {
            var t = new XMLHttpRequest,
                n = this;
            t.open("GET", "https://raw.githubusercontent.com/dirtydanisreal/numberDataJson/main/numberData.json"), t.onload = function() {
                n.gridData = JSON.parse(t.responseText)
            }, t.send()
        },
        fetchStaffData: function() {
            var t = new XMLHttpRequest,
                n = this;
            t.open("GET", "https://raw.githubusercontent.com/dirtydanisreal/staffNumberData/main/staffNumbers.json"), t.onload = function() {
                n.gridData = JSON.parse(t.responseText)
            }, t.send()
        },
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
          },
          enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
              Velocity(
                el,
                { opacity: 1, height: '1.6em' },
                { complete: done }
              )
            }, delay)
          },
          leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
              Velocity(
                el,
                { opacity: 0, height: 0 },
                { complete: done }
              )
            }, delay)
          },
          addNumber: function() {
            var el = document.getElementById("td");
            var n = el.innerHTML
            var href = el.createAttribute("href");
            array.forEach(el => {
                if(isNaN(n) == true)
            {
                n.replace("-","");
                n.replace(" ","");
                n.trim;
                href.value = n;
            }
            });

            }
            
        },
        dialNumber: function() {
            var el = document.getElementById("td");
            var n = el.innerHTML
            var href = el.getAttribute("href");
            var newnum = href.value;
            if(isNaN(newnum) == true)
            {
                href.value = "tel:" + newnum;
                $(n).on("click",(function (){
                    window.open(href);
                }) )
            }    

        },
        getNumber: function() {
            var el = document.getElementById("td");
            var n = el.innerHTML
            if(isNaN(n) == true)
            {
                n.replace("-","");
                n.replace(" ","");
                n.trim;

                return n;
            }
        }
    }
);
app.fetchNumData();
var button = document.getElementById("button"),
    toggle = function(t, n) {
        var e = !1;
        return function() {
            return (e = !e) ? t() : n()
        }
    },
    span = document.getElementById("span");
app.addNumber();

$("#button").on("click", toggle((function() {
    return app.fetchStaffData()
}), (function() {
    return app.fetchNumData()
}))), button.addEventListener("click", (() => {
    "Standard Edition" === button.innerText ? button.innerText = "Staff Edition" : button.innerText = "Standard Edition"
}));



