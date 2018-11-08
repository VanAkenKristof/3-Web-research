<?php

namespace App;

use Doctrine\ORM\Mapping AS ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
 * @ORM\Table(name="benchmarks")
 */
class BenchmarkDoctrine
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string")
     */
    protected $content;

    public function __construct($content)
    {
        $this->content = $content;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getContent()
    {
        return $this->content;
    }
    }