goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9021__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9022__i = 0, G__9022__a = new Array(arguments.length -  0);
while (G__9022__i < G__9022__a.length) {G__9022__a[G__9022__i] = arguments[G__9022__i + 0]; ++G__9022__i;}
  args = new cljs.core.IndexedSeq(G__9022__a,0);
} 
return G__9021__delegate.call(this,args);};
G__9021.cljs$lang$maxFixedArity = 0;
G__9021.cljs$lang$applyTo = (function (arglist__9023){
var args = cljs.core.seq(arglist__9023);
return G__9021__delegate(args);
});
G__9021.cljs$core$IFn$_invoke$arity$variadic = G__9021__delegate;
return G__9021;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9024__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9025__i = 0, G__9025__a = new Array(arguments.length -  0);
while (G__9025__i < G__9025__a.length) {G__9025__a[G__9025__i] = arguments[G__9025__i + 0]; ++G__9025__i;}
  args = new cljs.core.IndexedSeq(G__9025__a,0);
} 
return G__9024__delegate.call(this,args);};
G__9024.cljs$lang$maxFixedArity = 0;
G__9024.cljs$lang$applyTo = (function (arglist__9026){
var args = cljs.core.seq(arglist__9026);
return G__9024__delegate(args);
});
G__9024.cljs$core$IFn$_invoke$arity$variadic = G__9024__delegate;
return G__9024;
})()
;

return null;
});
