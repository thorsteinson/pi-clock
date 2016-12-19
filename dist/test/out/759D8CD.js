goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9025__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9026__i = 0, G__9026__a = new Array(arguments.length -  0);
while (G__9026__i < G__9026__a.length) {G__9026__a[G__9026__i] = arguments[G__9026__i + 0]; ++G__9026__i;}
  args = new cljs.core.IndexedSeq(G__9026__a,0);
} 
return G__9025__delegate.call(this,args);};
G__9025.cljs$lang$maxFixedArity = 0;
G__9025.cljs$lang$applyTo = (function (arglist__9027){
var args = cljs.core.seq(arglist__9027);
return G__9025__delegate(args);
});
G__9025.cljs$core$IFn$_invoke$arity$variadic = G__9025__delegate;
return G__9025;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9028__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9029__i = 0, G__9029__a = new Array(arguments.length -  0);
while (G__9029__i < G__9029__a.length) {G__9029__a[G__9029__i] = arguments[G__9029__i + 0]; ++G__9029__i;}
  args = new cljs.core.IndexedSeq(G__9029__a,0);
} 
return G__9028__delegate.call(this,args);};
G__9028.cljs$lang$maxFixedArity = 0;
G__9028.cljs$lang$applyTo = (function (arglist__9030){
var args = cljs.core.seq(arglist__9030);
return G__9028__delegate(args);
});
G__9028.cljs$core$IFn$_invoke$arity$variadic = G__9028__delegate;
return G__9028;
})()
;

return null;
});
