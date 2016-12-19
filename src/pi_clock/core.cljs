(ns pi-clock.core
  (:require [cljs.nodejs :as node]
            [pi-clock.hardware :as hardware]
            [pi-clock.clock :refer [get-time!]]
            [pi-clock.binary :refer [binpad]]
            [pi-clock.led :as led]))

(node/enable-util-print!)

(def HOURS-REGISTER [11 36 33 32 31 29])
(def MINUTES-REGISTER [12 35 38 40 15 16])
(def SECOUNDS-REGISTER [18 22 37 13 5 3])

(defn update-led! [{pin :pin on? :on}]
  (if on? (hardware/set-high! pin)
          (hardware/set-low! pin)))

;; Creates virtual representation of LEDs given a number
(defn assign-leds [register n]
  (let [size (count register)  
        binary-n (binpad n size)]
    (map make-led register binary-n)))

(defn time->leds [{hh :hours mm :minutes ss :seconds}]
  (concat (assign-leds HOURS-REGISTER hh) 
          (assign-leds MINUTES-REGISTER mm)
          (assign-leds SECONDS-REGISTER ss)))

(defn init-pins! []
  (let [pins (concat HOURS-REGISTER MINUTES-REGISTER SECONDS-REGISTER)]
    (doseq [p pins]
     (hardware/open-pin! p))))

;; Actually updates LEDs to match current time
(defn update-time! []
  (doseq [led (time->leds (get-time!))]
    (update-led! led)))

(defn -main [& args]
  (println "Initializing all pins")
  (init-pins!)
  (println "Starting clock")
  (js/setInterval #((update-time!)) 1000))

(set! *main-cli-fn* -main)