(ns pi-clock.bridge
  (:require [pi-clock.binary :refer [binpad]]
            [pi-clock.led :as led]))

(def HOURS-REGISTER  (reverse [11 36 33 32 31 29]))
(def MINUTES-REGISTER (reverse [12 35 38 40 15 16]))
(def SECONDS-REGISTER (reverse [18 22 37 13 5 3]))
(def ALL-PINS (concat HOURS-REGISTER MINUTES-REGISTER SECONDS-REGISTER))

;; Creates virtual representation of LEDs given a number
(defn assign-leds [register n]
  (let [size (count register)  
        binary-n (binpad n size)]
    (map led/make-led register binary-n)))

(defn time->leds [{hh :hours mm :minutes ss :seconds}]
  (concat (assign-leds HOURS-REGISTER hh) 
          (assign-leds MINUTES-REGISTER mm)
          (assign-leds SECONDS-REGISTER ss)))