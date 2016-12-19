// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.led');
goog.require('cljs.core');
pi_clock.led.on = (function pi_clock$led$on(led){
return cljs.core.assoc.call(null,led,new cljs.core.Keyword(null,"on","on",173873944),true);
});
pi_clock.led.off = (function pi_clock$led$off(led){
return cljs.core.assoc.call(null,led,new cljs.core.Keyword(null,"on","on",173873944),false);
});
pi_clock.led.toggle = (function pi_clock$led$toggle(led){
return cljs.core.update.call(null,led,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.not);
});
pi_clock.led.make_led = (function pi_clock$led$make_led(pin,on_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on","on",173873944),on_QMARK_,new cljs.core.Keyword(null,"pin","pin",-2111774834),pin], null);
});

//# sourceMappingURL=led.js.map