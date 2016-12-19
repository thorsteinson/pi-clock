(defproject pi-clock "0.0.1"
  :description "A binary clock"
  :source-paths ["src"]
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.293"
                  :exclusions [org.apache.ant/ant]]]
  :plugins [[lein-cljsbuild "1.1.5"]]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {:output-dir "dist/out"
                                   :output-to "dist/main.js"
                                   :main "pi-clock.core"
                                   :target :nodejs
                                   :optimizations :none
                                   :pretty-print true}}
                       {:source-paths ["src" "test"]
                        :compiler {:output-dir "dist/test/out" 
                                   :output-to "dist/test/main.js"
                                   :main "pi-clock.core-test" 
                                   :target :nodejs
                                   :optimizations :none
                                   :pretty-print true}}]})