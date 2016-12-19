(ns pi-clock.clock)

(defn get-time! []
  (let [time (js/Date.)] 
    {:hours (.getHours time)
     :minutes (.getMinutes time)
     :seconds (.getSeconds time)}))