(ns pi-clock.core-test
  (:require [cljs.nodejs :as node]))

(node/enable-util-print!)

(defn -main [& args]
  (println "This is where we will do testing :)"))

(set! *main-cli-fn* -main)