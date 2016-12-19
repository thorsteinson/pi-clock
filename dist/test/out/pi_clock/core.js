// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
goog.require('pi_clock.clock');
goog.require('pi_clock.binary');
goog.require('pi_clock.led');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.HOURS_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(36),(33),(32),(31),(29)], null);
pi_clock.core.MINUTES_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(35),(38),(40),(15),(16)], null);
pi_clock.core.SECOUNDS_REGISTER = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(22),(37),(13),(5),(3)], null);
pi_clock.core.update_led_BANG_ = (function pi_clock$core$update_led_BANG_(p__9126){
var map__9129 = p__9126;
var map__9129__$1 = ((((!((map__9129 == null)))?((((map__9129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9129):map__9129);
var pin = cljs.core.get.call(null,map__9129__$1,new cljs.core.Keyword(null,"pin","pin",-2111774834));
var on_QMARK_ = cljs.core.get.call(null,map__9129__$1,new cljs.core.Keyword(null,"on","on",173873944));
if(cljs.core.truth_(on_QMARK_)){
return pi_clock.hardware.set_high_BANG_.call(null,pin);
} else {
return pi_clock.hardware.set_low_BANG_.call(null,pin);
}
});
pi_clock.core.assign_leds = (function pi_clock$core$assign_leds(register,n){
var size = cljs.core.count.call(null,register);
var binary_n = pi_clock.binary.binpad.call(null,n,size);
return cljs.core.map.call(null,pi_clock.core.make_led,register,binary_n);
});
pi_clock.core.time__GT_leds = (function pi_clock$core$time__GT_leds(p__9131){
var map__9134 = p__9131;
var map__9134__$1 = ((((!((map__9134 == null)))?((((map__9134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9134):map__9134);
var hh = cljs.core.get.call(null,map__9134__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mm = cljs.core.get.call(null,map__9134__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var ss = cljs.core.get.call(null,map__9134__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return cljs.core.concat.call(null,pi_clock.core.assign_leds.call(null,pi_clock.core.HOURS_REGISTER,hh),pi_clock.core.assign_leds.call(null,pi_clock.core.MINUTES_REGISTER,mm),pi_clock.core.assign_leds.call(null,pi_clock.core.SECONDS_REGISTER,ss));
});
pi_clock.core.init_pins_BANG_ = (function pi_clock$core$init_pins_BANG_(){
var pins = cljs.core.concat.call(null,pi_clock.core.HOURS_REGISTER,pi_clock.core.MINUTES_REGISTER,pi_clock.core.SECONDS_REGISTER);
var seq__9140 = cljs.core.seq.call(null,pins);
var chunk__9141 = null;
var count__9142 = (0);
var i__9143 = (0);
while(true){
if((i__9143 < count__9142)){
var p = cljs.core._nth.call(null,chunk__9141,i__9143);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__9144 = seq__9140;
var G__9145 = chunk__9141;
var G__9146 = count__9142;
var G__9147 = (i__9143 + (1));
seq__9140 = G__9144;
chunk__9141 = G__9145;
count__9142 = G__9146;
i__9143 = G__9147;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__9140);
if(temp__6753__auto__){
var seq__9140__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9140__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__9140__$1);
var G__9148 = cljs.core.chunk_rest.call(null,seq__9140__$1);
var G__9149 = c__7991__auto__;
var G__9150 = cljs.core.count.call(null,c__7991__auto__);
var G__9151 = (0);
seq__9140 = G__9148;
chunk__9141 = G__9149;
count__9142 = G__9150;
i__9143 = G__9151;
continue;
} else {
var p = cljs.core.first.call(null,seq__9140__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__9152 = cljs.core.next.call(null,seq__9140__$1);
var G__9153 = null;
var G__9154 = (0);
var G__9155 = (0);
seq__9140 = G__9152;
chunk__9141 = G__9153;
count__9142 = G__9154;
i__9143 = G__9155;
continue;
}
} else {
return null;
}
}
break;
}
});
pi_clock.core.update_time_BANG_ = (function pi_clock$core$update_time_BANG_(){
var seq__9160 = cljs.core.seq.call(null,pi_clock.core.time__GT_leds.call(null,pi_clock.clock.get_time_BANG_.call(null)));
var chunk__9161 = null;
var count__9162 = (0);
var i__9163 = (0);
while(true){
if((i__9163 < count__9162)){
var led = cljs.core._nth.call(null,chunk__9161,i__9163);
pi_clock.core.update_led_BANG_.call(null,led);

var G__9164 = seq__9160;
var G__9165 = chunk__9161;
var G__9166 = count__9162;
var G__9167 = (i__9163 + (1));
seq__9160 = G__9164;
chunk__9161 = G__9165;
count__9162 = G__9166;
i__9163 = G__9167;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__9160);
if(temp__6753__auto__){
var seq__9160__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9160__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__9160__$1);
var G__9168 = cljs.core.chunk_rest.call(null,seq__9160__$1);
var G__9169 = c__7991__auto__;
var G__9170 = cljs.core.count.call(null,c__7991__auto__);
var G__9171 = (0);
seq__9160 = G__9168;
chunk__9161 = G__9169;
count__9162 = G__9170;
i__9163 = G__9171;
continue;
} else {
var led = cljs.core.first.call(null,seq__9160__$1);
pi_clock.core.update_led_BANG_.call(null,led);

var G__9172 = cljs.core.next.call(null,seq__9160__$1);
var G__9173 = null;
var G__9174 = (0);
var G__9175 = (0);
seq__9160 = G__9172;
chunk__9161 = G__9173;
count__9162 = G__9174;
i__9163 = G__9175;
continue;
}
} else {
return null;
}
}
break;
}
});
pi_clock.core._main = (function pi_clock$core$_main(var_args){
var args__8308__auto__ = [];
var len__8301__auto___9177 = arguments.length;
var i__8302__auto___9178 = (0);
while(true){
if((i__8302__auto___9178 < len__8301__auto___9177)){
args__8308__auto__.push((arguments[i__8302__auto___9178]));

var G__9179 = (i__8302__auto___9178 + (1));
i__8302__auto___9178 = G__9179;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"Initializing all pins");

pi_clock.core.init_pins_BANG_.call(null);

cljs.core.println.call(null,"Starting clock");

return setInterval((function (){
return pi_clock.core.update_time_BANG_.call(null).call(null);
}),(1000));
});

pi_clock.core._main.cljs$lang$maxFixedArity = (0);

pi_clock.core._main.cljs$lang$applyTo = (function (seq9176){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9176));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map