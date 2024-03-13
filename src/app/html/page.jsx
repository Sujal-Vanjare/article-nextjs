export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl">HTML Semantic Tags</h1>

      <section className="mt-2 p-2 flex flex-col gap-4">
        <h2>Line Break</h2>
        {/* br tag  */}
        <h2>
          Line <br /> Break
        </h2>
        {/* hr tag */}
        <h2>
          horizontal line
          <hr />
        </h2>
        {/* p tag */}
        <p>it's a paragraph</p>
        {/* abbr tag */}
        <p>
          This is <abbr title="Laugh out loud">LOL</abbr>
        </p>
        {/* b tag */}
        <p>
          I am <b>Bold</b>
        </p>
        {/* bdi tag */}
        <p>
          This is some <bdi>مرحبا بالعالم</bdi> text.
        </p>
        {/* bdo tag */}
        <p>
          This is some <bdo dir="rtl">ah looc RTL txet</bdo> inside it.
        </p>
        {/* it will show as - some cool LTR text */}

        {/* Block quote */}
        <blockquote>
          <p>
            Why is it, that the Uchiha clan is known by all and feared by all? I
            will show you what the Sharingan can do when wielded by a true heir
            of the bloodline.
          </p>
          <footer>
            — Itachi Uchiha,{" "}
            <cite>
              <a href="https://g.co/kgs/KZARpia">Naruto</a>
            </cite>
          </footer>
        </blockquote>
        {/* code tag */}
        <p>
          This is <code>console.log('Hello, world!');</code>
        </p>
        {/* del tag */}
        <p>
          This paragraph contains some <del>deleted text</del>.
        </p>
        {/* dfn tag */}
        <p>
          The <dfn>HTML</dfn> stands for HyperText Markup Language.
        </p>
        {/* em tag */}
        <p>
          This is an <em>important</em> point to consider.
        </p>

        <p>
          In HTML 5, what was previously called <em>block-level</em> content is
          now called <em>flow</em> content.
        </p>
        <p>
          This task is{" "}
          <em>
            very <em>urgent</em>
          </em>{" "}
          and needs to be completed immediately.
        </p>
        {/* i tag */}
        <p>
          This is an <i>important</i> point to consider.
        </p>
        {/* ins tag */}
        <p>
          The price has been updated to <ins>$10</ins> per unit.
        </p>
        {/* kbd tag */}
        <p>
          Save the document by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>
        </p>
        {/* mark tag */}
        <p>
          The <mark>deadline for submitting the report</mark> is next Friday.
        </p>
      </section>
    </main>
  );
}
