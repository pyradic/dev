<?php

namespace Illuminate\Support {

    /**
     * @mixin \Illuminate\Support\Collection
     */
    class Collection
    {
        public function process()
        {
            return $this;
        }
    }
}
