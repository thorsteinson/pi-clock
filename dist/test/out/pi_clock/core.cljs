(ns pi-clock.core
  (:require [cljs.nodejs :as node]
            [pi-clock.hardware :as hardware]))

(node/enable-util-print!)

(def HOURS-REGISTER [11 36 33 32 29 7])

(defn -main [& args]
  (println "The LEDs should change :)")
  (map hardware/open-pin! HOURS-REGISTER)
  (map hardware/set-high! HOURS-REGISTER))

(set! *main-cli-fn* -main)