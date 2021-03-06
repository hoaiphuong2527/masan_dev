@if ($paginator->hasPages())
    <ul class="pagination" data-anim-type="fadeInUp" data-anim-delay="150">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0)" aria-label="Previous"><span aria-hidden="true"><i class="ic-link ic-link--pagi"></i></span><span class="sr-only">Previous</span></a></li>
        @else
            <li class="page-item"><a class="page-link" href="{{ $paginator->previousPageUrl() }}" aria-label="Previous"><span aria-hidden="true"><i class="ic-link ic-link--pagi"></i></span><span class="sr-only">Previous</span></a></li>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="page-item active"><a class="page-link" href="javascript:void(0)">{{ $element }}</a></li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li class="page-item active"><a class="page-link" title="{{ $page }}" href="javascript:void(0)">{{ $page }}</a></li>
                    @else
                        <li class="page-item"><a class="page-link" title="{{ $page }}" href="{{ $url }}">{{ $page }}</a></li>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="page-item"><a class="page-link" href="{{ $paginator->nextPageUrl() }}" aria-label="Next"><span aria-hidden="true"><i class="ic-link ic-link--pagi ic-link--pagiright"></i></span><span class="sr-only">Next</span></a></li>
        @else
            <li class="page-item disabled"><a class="page-link" href="javascript:void(0)" aria-label="Next"><span aria-hidden="true"><i class="ic-link ic-link--pagi ic-link--pagiright"></i></span><span class="sr-only">Next</span></a></li>
        @endif
    </ul>
@endif
