// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.binary');
goog.require('cljs.core');
goog.require('cljs.spec');
goog.require('clojure.string');
pi_clock.binary.__GT_binary = (function pi_clock$binary$__GT_binary(n){
var bin_str = n.toString((2));
var digits = cljs.core.rest.call(null,clojure.string.split.call(null,bin_str,(new RegExp(""))));
var one_QMARK_ = cljs.core.partial.call(null,cljs.core._EQ_,"1");
return cljs.core.map.call(null,one_QMARK_,digits);
});
pi_clock.binary.pad_zeros = (function pi_clock$binary$pad_zeros(xs,size){
var list_len = cljs.core.count.call(null,xs);
var pad_size = (size - list_len);
var zeros = cljs.core.take.call(null,pad_size,cljs.core.repeat.call(null,false));
return cljs.core.concat.call(null,zeros,xs);
});

//# sourceMappingURL=binary.js.map