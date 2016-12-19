(ns pi-clock.core
  (:require [cljs.nodejs :as node]
            [pi-clock.hardware :as hardware]))

(node/enable-util-print!)

(def HOURS-REGISTER [11 36 33 32 29 7])

(defn -main [& args]
  (println "The LEDs should change :)")
  (map open-pin! HOURS-REGISTER))

(set! *main-cli-fn* -main)