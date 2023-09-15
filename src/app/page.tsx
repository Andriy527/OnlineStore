import TagList from "@/components/TagList/page";
import BrandList from "@/components/BrandList/page";
import DeviceList from "@/components/DeviceList/page";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
      <div className="row">
    <div className="col-lg-4">
        <TagList />
    </div>
          <div className="col-lg-8">
              <div className="column">
                  <BrandList />
                  <DeviceList />
                  <Pagination />
              </div>
          </div>
      </div>
  )
}
