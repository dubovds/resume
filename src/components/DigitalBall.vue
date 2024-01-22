<template>
<div class="digital-ball">
    <div class="overlay"></div>
    <div class="globe">
            <div class="globe-wrap">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle-hor"></div>
              <div class="circle-hor-middle"></div>
            </div>
        </div>
</div>
</template>
<style>
/* @import '../assets/scss/utils/_index'; */
.digital-ball {
    z-index: 500;
    position: absolute;
    right: 1px;
    left: auto;
    top: 19px;
    width: 83px;
    height: 83px;
    transform: translate(0%, 0%);
    background: transparent;
}

.globe {
  width: 2.5em;
  height: 2.5em;
  font-size: .8em;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
  will-change: transform;
}

.globe-wrap {
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(30deg);
  animation: globe 5.4s cubic-bezier(0.35, 0, 0.65, 1) infinite;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 0.125em #fff;
}

@keyframes globe {
   0%   {transform: translate(-50%, -50%) rotate(15deg); }
   50%   {transform: translate(-50%, -50%) rotate(-15deg);}
   100% {transform: translate(-50%, -50%) rotate(15deg);}
}

.globe .circle {
   position: absolute;
   top: 50%;
   left: 50%;
   width: 100%;
   height: 100%;
   transform: translate(-50%, -50%);
   border-radius: 50%;
   box-shadow: inset .1em 0px 0px .08em #fff;
   animation: circle1 2.7s linear infinite;
   font-size: .75em;
}

@keyframes circle1 {
   0%   {border-radius: 50%; box-shadow: inset .1em 0px 0px .08em #fff; width: 100%; }
   49%  {border-radius: 50%; box-shadow: inset .1em 0px 0px .08em #fff; background: transparent;}
   50%  {border-radius: 0%; width: .175em; background: var(--color-white);}
   51%  {border-radius: 50%; box-shadow: inset -.1em 0px 0px .08em #fff; background: transparent;}
   100% {border-radius: 50%; box-shadow: inset -.1em 0px 0px .08em #fff; width: 100%;}
}

.globe :nth-child(1) {
   animation-delay: -1.8s;
}

.globe :nth-child(2) {
   animation-delay: -.9s;
}


.globe .circle-hor {
   position: absolute;
   top: 50%;
   left: 50%;
   width: 150%;
   transform: translate(-50%, -50%);
   border-radius: 50%;
   height: 55%;
   box-shadow: inset 0px 0px 0px .15em #fff;
   font-size: .75em;
}

.globe .circle-hor-middle {
   position: absolute;
   top: 50%;
   left: 50%;
   width: 150%;
   transform: translate(-50%, -50%);
   border-radius: 0%;
   height: .15em;
   background: #fff;
   font-size: .75em;
}
</style>