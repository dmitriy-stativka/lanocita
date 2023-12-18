<section class="product_home_list">
    <div class="list-item">
        <div class="product_home_item">
            <img src="<?php echo esc_url( get_sub_field( 'image_1' ) ); ?>" alt="">
            <?php
                $link = get_sub_field( 'cta1' );
                if ( $link ) :
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                    $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                        <a class="c-btn" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
                            <span class="c-btn__txt">
                                <?php echo esc_html( $link_title ); ?>
                            </span>
                        </a>               
                <?php endif; ?>
        </div>
        <div class="product_home_item">
            <img src="<?php echo esc_url( get_sub_field( 'image_2' ) ); ?>" alt="">
            <?php
                $link = get_sub_field( 'cta2' );
                if ( $link ) :
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                    $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="c-btn" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
                        <span class="c-btn__txt">
                            <?php echo esc_html( $link_title ); ?>
                        </span>
                    </a>
                <?php endif; 
            ?>
        </div>

        <div class="product_home_item -large">
            <img src="<?php echo esc_url( get_sub_field( 'image_3' ) ); ?>" alt="">
            <?php
                $link = get_sub_field( 'cta3' );
                if ( $link ) :
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                    $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="c-btn" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
                        <span class="c-btn__txt">
                            <?php echo esc_html( $link_title ); ?>
                        </span>
                    </a>
                <?php endif; 
            ?>
        </div>
    </div>
</section>