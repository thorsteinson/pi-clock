goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../pi_clock/hardware.js", ['pi_clock.hardware'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/spec/impl/gen.js", ['cljs.spec.impl.gen'], ['cljs.core']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../cljs/spec.js", ['cljs.spec'], ['cljs.core', 'goog.object', 'cljs.spec.impl.gen', 'clojure.string', 'clojure.walk']);
goog.addDependency("../pi_clock/binary.js", ['pi_clock.binary'], ['cljs.core', 'clojure.string', 'cljs.spec']);
goog.addDependency("../1E1494B.js", ['cljs.nodejs'], ['cljs.core']);
goog.addDependency("../pi_clock/led.js", ['pi_clock.led'], ['cljs.core']);
goog.addDependency("../pi_clock/clock.js", ['pi_clock.clock'], ['cljs.core']);
goog.addDependency("../pi_clock/core.js", ['pi_clock.core'], ['pi_clock.hardware', 'cljs.core', 'pi_clock.binary', 'cljs.nodejs', 'pi_clock.led', 'pi_clock.clock']);
goog.addDependency("../1BA16AC.js", ['cljs.nodejscli'], ['cljs.core', 'cljs.nodejs']);
