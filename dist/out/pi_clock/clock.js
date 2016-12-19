// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.clock');
goog.require('cljs.core');
pi_clock.clock.get_time_BANG_ = (function pi_clock$clock$get_time_BANG_(){
var time = (new Date());
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hours","hours",58380855),time.getHours(),new cljs.core.Keyword(null,"minutes","minutes",1319166394),time.getMinutes(),new cljs.core.Keyword(null,"seconds","seconds",-445266194),time.getSeconds()], null);
});

//# sourceMappingURL=clock.js.map