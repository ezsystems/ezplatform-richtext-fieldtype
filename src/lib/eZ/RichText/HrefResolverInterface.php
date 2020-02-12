<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace EzSystems\EzPlatformRichText\eZ\RichText;

/**
 * @internal
 */
interface HrefResolverInterface
{
    /**
     * Converts internal links (ezcontent:// and ezlocation://) to URLs.
     */
    public function resolve(string $href): string;
}
