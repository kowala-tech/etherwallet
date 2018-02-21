<section class="pre-footer">
  <div class="container">
    <p>
      This wallet does not hold your keys for you. We cannot access accounts, recover keys, reset passwords, nor reverse transactions. Protect your keys &amp; always check that you are on correct URL.
    </p>
  </div>
</section>

<footer class="footer text-center" style="min-height: 15vh;" role="content" aria-label="footer" ng-controller='footerCtrl' >

  <article class="block__wrap" style="max-width: 1780px; margin: auto;">

    <section class="footer--left">

    </section>

    <section class="footer--cent">
      <p ng-show="showBlocks">
        Latest Block#: {{currentBlockNumber}}
      </p>
      <p>
        &copy; 2018 Kowala
      </p>
    </section>

    <section class="footer--righ">

    </section>

  </article>

</div>


</footer>

@@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }

@@if (site === 'mew' ) { @@include( './onboardingModal.tpl',   { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './onboardingModal.tpl',   { "site": "cx"  } ) }


</main>
</body>
</html>
