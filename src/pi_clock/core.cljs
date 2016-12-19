(ns pi-clock.core
  (:require [cljs.nodejs :as node]
            [pi-clock.hardware :as hardware]))

(node/enable-util-print!)

(def HOURS-REGISTER [11 36 33 32 31 29])
(def MINUTES-REGISTER [12 35 38 40 15 16])
(def SECOUNDS-REGISTER [18 22 37 13 5 3])

(def rpio (js/require "rpio"))
(defn -main [& args]
  (let [pins (concat HOURS-REGISTER MINUTES-REGISTER SECOUNDS-REGISTER)]
    (doseq [p pins]
      (hardware/open-pin! p)
      (hardware/set-high! p))
    (println "All LEDs should be turned on")
    (js/setTimeout
      (fn []
        (doseq [p pins]
          (hardware/set-low! p))
        (println "All LEDs should be off"))
      1000)))

(set! *main-cli-fn* -main)