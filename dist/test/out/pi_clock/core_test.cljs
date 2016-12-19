(ns pi-clock.core-test
  (:require [cljs.nodejs :as node]
            [cljs.test :refer-macros [run-tests]]
            [pi-clock.binary-test]))

(node/enable-util-print!)

(defn -main [& args]
  (run-tests 'pi-clock.binary-test))

(set! *main-cli-fn* -main)