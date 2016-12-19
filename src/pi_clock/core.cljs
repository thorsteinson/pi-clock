(ns pi-clock.core
  (:require [cljs.nodejs :as node]))

(node/enable-util-print!)

(defn -main [& args]
  (println "This is the main entry point into the program"))

(set! *main-cli-fn* -main)